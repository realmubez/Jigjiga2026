import React, { useState, useEffect } from "react";
import { PAGE_REGISTRY, PageMeta } from "@/lib/pageDefaults";
import { getPageOverrides, setPageOverrides, resetPageOverrides, PageContent, ContentSection, ContentCard, ContentGroup } from "@/lib/contentStore";
import {
  FileEdit, ChevronRight, RotateCcw, Save, Plus, Trash2, ChevronDown, ChevronUp,
  Image as ImageIcon, Type, AlignLeft, ArrowLeft, Check, Layers
} from "lucide-react";

// ─── Helpers ────────────────────────────────────────────────────────────────

function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }

function mergePageContent(meta: PageMeta): PageContent {
  const stored = getPageOverrides(meta.id);
  const d = meta.defaults;
  return {
    heroImageUrl: stored.heroImageUrl ?? d.heroImageUrl ?? "",
    pullQuote: stored.pullQuote ?? d.pullQuote ?? "",
    sections: stored.sections && stored.sections.length > 0 ? stored.sections : (d.sections ?? []),
    groups: stored.groups && stored.groups.length > 0 ? stored.groups : (d.groups ?? []),
  };
}

// ─── Page List ──────────────────────────────────────────────────────────────

function PageList({ onSelect }: { onSelect: (m: PageMeta) => void }) {
  const groups = PAGE_REGISTRY.reduce<Record<string, PageMeta[]>>((acc, p) => {
    if (!acc[p.group]) acc[p.group] = [];
    acc[p.group].push(p);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900">Content Manager</h1>
        <p className="text-gray-500 text-sm mt-1">Edit text, images, and cards for any page on the site</p>
      </div>

      <div className="space-y-6">
        {Object.entries(groups).map(([groupName, pages]) => (
          <div key={groupName} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-black text-gray-500 uppercase tracking-wider">{groupName}</span>
            </div>
            <div className="divide-y divide-gray-50">
              {pages.map((page) => {
                const hasOverride = Object.keys(getPageOverrides(page.id)).length > 0;
                return (
                  <button key={page.id} onClick={() => onSelect(page)}
                    className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50/60 transition-colors text-left group">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${hasOverride ? "bg-[#f97316]" : "bg-gray-200"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-gray-900 truncate group-hover:text-primary transition-colors">{page.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5 capitalize">{page.type} page{hasOverride ? " · custom content saved" : ""}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                        page.type === "hub" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                      }`}>{page.type}</span>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section Editor ─────────────────────────────────────────────────────────

function SectionItem({
  section, index, total,
  onChange, onDelete, onMove
}: {
  section: ContentSection; index: number; total: number;
  onChange: (s: ContentSection) => void;
  onDelete: () => void;
  onMove: (dir: -1 | 1) => void;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        <span className="w-6 h-6 bg-primary/10 text-primary text-xs font-black rounded-full flex items-center justify-center shrink-0">{index + 1}</span>
        <span className="flex-1 font-bold text-sm text-gray-800 truncate">{section.title || "Untitled Section"}</span>
        <div className="flex items-center gap-1 shrink-0">
          {index > 0 && (
            <span onClick={e => { e.stopPropagation(); onMove(-1); }}
              className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-white transition-colors">
              <ChevronUp className="w-3.5 h-3.5" />
            </span>
          )}
          {index < total - 1 && (
            <span onClick={e => { e.stopPropagation(); onMove(1); }}
              className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-white transition-colors">
              <ChevronDown className="w-3.5 h-3.5" />
            </span>
          )}
          <span onClick={e => { e.stopPropagation(); onDelete(); }}
            className="p-1 rounded text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
            <Trash2 className="w-3.5 h-3.5" />
          </span>
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>

      {open && (
        <div className="p-4 space-y-4 bg-white">
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1.5">Section Title</label>
            <input value={section.title} onChange={e => onChange({ ...section, title: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="Section title…"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1.5">Body Text</label>
            <textarea rows={5} value={section.body} onChange={e => onChange({ ...section, body: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none leading-relaxed"
              placeholder="Write the section text here…"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1.5">Image URL</label>
            <input value={section.imageUrl} onChange={e => onChange({ ...section, imageUrl: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="https://…"
            />
            {section.imageUrl && (
              <img src={section.imageUrl} alt="" className="mt-2 w-full h-32 object-cover rounded-xl bg-gray-100" />
            )}
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1.5">Image Alt Text</label>
            <input value={section.imageAlt || ""} onChange={e => onChange({ ...section, imageAlt: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="Describe the image…"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Card Item Editor ────────────────────────────────────────────────────────

function CardItem({
  card, index, total, onChange, onDelete, onMove
}: {
  card: ContentCard; index: number; total: number;
  onChange: (c: ContentCard) => void; onDelete: () => void; onMove: (d: -1 | 1) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
        {card.icon && <span className="text-xl shrink-0">{card.icon}</span>}
        {!card.icon && <span className="w-6 h-6 bg-gray-200 text-gray-500 text-xs font-black rounded-full flex items-center justify-center shrink-0">{index + 1}</span>}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-gray-800 truncate">{card.name || "Untitled Card"}</p>
          {card.subtitle && <p className="text-xs text-gray-400 truncate">{card.subtitle}</p>}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {index > 0 && <span onClick={e => { e.stopPropagation(); onMove(-1); }} className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-white transition-colors"><ChevronUp className="w-3.5 h-3.5" /></span>}
          {index < total - 1 && <span onClick={e => { e.stopPropagation(); onMove(1); }} className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-white transition-colors"><ChevronDown className="w-3.5 h-3.5" /></span>}
          <span onClick={e => { e.stopPropagation(); onDelete(); }} className="p-1 rounded text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-3.5 h-3.5" /></span>
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>

      {open && (
        <div className="p-4 space-y-3 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Name</label>
              <input value={card.name} onChange={e => onChange({ ...card, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="Card name…" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Subtitle</label>
              <input value={card.subtitle || ""} onChange={e => onChange({ ...card, subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="Subtitle…" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Description</label>
            <textarea rows={3} value={card.description} onChange={e => onChange({ ...card, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none leading-relaxed"
              placeholder="Card description…" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Image URL</label>
              <input value={card.image} onChange={e => onChange({ ...card, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="https://…" />
              {card.image && <img src={card.image} alt="" className="mt-2 w-full h-20 object-cover rounded-lg bg-gray-100" />}
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Tag</label>
              <input value={card.tag || ""} onChange={e => onChange({ ...card, tag: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="e.g. Cultural Icon…" />
              <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1 mt-2">Emoji Icon</label>
              <input value={card.icon || ""} onChange={e => onChange({ ...card, icon: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                placeholder="🍚" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-1">Link (href)</label>
            <input value={card.href} onChange={e => onChange({ ...card, href: e.target.value })}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="/path or https://…" />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page Editor ─────────────────────────────────────────────────────────────

function PageEditor({ meta, onBack }: { meta: PageMeta; onBack: () => void }) {
  const [content, setContent] = useState<PageContent>(() => mergePageContent(meta));
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaving(true);
    setTimeout(() => {
      setPageOverrides(meta.id, content);
      setSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    }, 400);
  }

  function handleReset() {
    if (!confirm("Reset to default content? Any saved changes for this page will be lost.")) return;
    resetPageOverrides(meta.id);
    setContent(mergePageContent(meta));
  }

  // ── Sections helpers (article pages)
  function updateSection(idx: number, s: ContentSection) {
    const sections = [...(content.sections || [])];
    sections[idx] = s;
    setContent(c => ({ ...c, sections }));
    setSaved(false);
  }
  function deleteSection(idx: number) {
    const sections = (content.sections || []).filter((_, i) => i !== idx);
    setContent(c => ({ ...c, sections }));
    setSaved(false);
  }
  function moveSection(idx: number, dir: -1 | 1) {
    const sections = [...(content.sections || [])];
    const target = idx + dir;
    if (target < 0 || target >= sections.length) return;
    [sections[idx], sections[target]] = [sections[target], sections[idx]];
    setContent(c => ({ ...c, sections }));
    setSaved(false);
  }
  function addSection() {
    const sections = [...(content.sections || []), { id: uid(), title: "", body: "", imageUrl: "", imageAlt: "" }];
    setContent(c => ({ ...c, sections }));
    setSaved(false);
  }

  // ── Card group helpers (hub pages)
  function updateCard(groupIdx: number, cardIdx: number, card: ContentCard) {
    const groups = (content.groups || []).map((g, gi) => gi !== groupIdx ? g : {
      ...g, items: g.items.map((it, ci) => ci !== cardIdx ? it : card)
    });
    setContent(c => ({ ...c, groups }));
    setSaved(false);
  }
  function deleteCard(groupIdx: number, cardIdx: number) {
    const groups = (content.groups || []).map((g, gi) => gi !== groupIdx ? g : {
      ...g, items: g.items.filter((_, ci) => ci !== cardIdx)
    });
    setContent(c => ({ ...c, groups }));
    setSaved(false);
  }
  function moveCard(groupIdx: number, cardIdx: number, dir: -1 | 1) {
    const groups = (content.groups || []).map((g, gi) => {
      if (gi !== groupIdx) return g;
      const items = [...g.items];
      const target = cardIdx + dir;
      if (target < 0 || target >= items.length) return g;
      [items[cardIdx], items[target]] = [items[target], items[cardIdx]];
      return { ...g, items };
    });
    setContent(c => ({ ...c, groups }));
    setSaved(false);
  }
  function addCard(groupIdx: number) {
    const groups = (content.groups || []).map((g, gi) => gi !== groupIdx ? g : {
      ...g, items: [...g.items, { id: uid(), name: "", subtitle: "", description: "", image: "", tag: "", icon: "", href: "" }]
    });
    setContent(c => ({ ...c, groups }));
    setSaved(false);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-xl text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <p className="text-xs text-gray-400 font-semibold">{meta.group}</p>
            <h1 className="text-xl font-black text-gray-900">{meta.label}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={handleReset} className="flex items-center gap-1.5 px-3 py-2 border border-gray-200 text-gray-500 text-xs font-bold rounded-xl hover:bg-gray-50 transition-colors">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          <button onClick={handleSave} disabled={saving}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-black shadow-lg transition-all disabled:opacity-50 ${
              saved ? "bg-emerald-500 text-white shadow-emerald-500/25" : "bg-primary text-white shadow-primary/25 hover:bg-blue-700"
            }`}>
            {saved ? <><Check className="w-3.5 h-3.5" /> Saved!</> : saving ? "Saving…" : <><Save className="w-3.5 h-3.5" /> Save Changes</>}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Article: sections */}
          {meta.type === "article" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-black text-gray-900">Content Sections</h2>
                <button onClick={addSection} className="flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                  <Plus className="w-3.5 h-3.5" /> Add Section
                </button>
              </div>
              <div className="space-y-3">
                {(content.sections || []).map((s, i) => (
                  <SectionItem key={s.id} section={s} index={i} total={(content.sections || []).length}
                    onChange={s => updateSection(i, s)}
                    onDelete={() => deleteSection(i)}
                    onMove={dir => moveSection(i, dir)}
                  />
                ))}
                {(content.sections || []).length === 0 && (
                  <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-2xl">
                    <AlignLeft className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm font-semibold">No sections yet</p>
                    <button onClick={addSection} className="text-primary text-sm font-bold mt-2 hover:underline">Add your first section →</button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Hub: groups with cards */}
          {meta.type === "hub" && (
            <div className="space-y-6">
              {(content.groups || []).map((group, gi) => (
                <div key={group.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
                    <h3 className="font-black text-sm text-gray-800">{group.label}</h3>
                    <button onClick={() => addCard(gi)} className="flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                      <Plus className="w-3.5 h-3.5" /> Add Card
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    {group.items.map((card, ci) => (
                      <CardItem key={card.id} card={card} index={ci} total={group.items.length}
                        onChange={c => updateCard(gi, ci, c)}
                        onDelete={() => deleteCard(gi, ci)}
                        onMove={dir => moveCard(gi, ci, dir)}
                      />
                    ))}
                    {group.items.length === 0 && (
                      <div className="text-center py-6 border-2 border-dashed border-gray-100 rounded-xl">
                        <p className="text-gray-400 text-xs font-semibold">No cards in this group</p>
                        <button onClick={() => addCard(gi)} className="text-primary text-xs font-bold mt-1 hover:underline">Add card →</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Hero image */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
              <ImageIcon className="w-3.5 h-3.5" /> Hero Image URL
            </label>
            <input value={content.heroImageUrl || ""} onChange={e => { setContent(c => ({ ...c, heroImageUrl: e.target.value })); setSaved(false); }}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              placeholder="https://…"
            />
            {content.heroImageUrl && (
              <img src={content.heroImageUrl} alt="" className="mt-3 w-full h-28 object-cover rounded-xl bg-gray-100" />
            )}
          </div>

          {/* Pull quote (article only) */}
          {meta.type === "article" && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <label className="flex items-center gap-2 text-xs font-black text-gray-500 uppercase tracking-wider mb-3">
                <Type className="w-3.5 h-3.5" /> Pull Quote
              </label>
              <textarea rows={4} value={content.pullQuote || ""}
                onChange={e => { setContent(c => ({ ...c, pullQuote: e.target.value })); setSaved(false); }}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none leading-relaxed"
                placeholder="A memorable quote from this page…"
              />
            </div>
          )}

          {/* Info */}
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-wider mb-2">How it works</p>
            <ul className="text-xs text-blue-700 space-y-1.5 font-medium">
              <li>· Edit any field and click <strong>Save Changes</strong></li>
              <li>· Changes appear on the public site immediately</li>
              <li>· Orange dot = page has saved custom content</li>
              <li>· Use <strong>Reset</strong> to restore default content</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function AdminContent() {
  const [selected, setSelected] = useState<PageMeta | null>(null);

  if (selected) {
    return <PageEditor key={selected.id} meta={selected} onBack={() => setSelected(null)} />;
  }
  return <PageList onSelect={setSelected} />;
}
