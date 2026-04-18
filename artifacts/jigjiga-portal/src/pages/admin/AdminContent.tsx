import React, { useState } from "react";
import { PAGE_REGISTRY, PageMeta } from "@/lib/pageDefaults";
import {
  getPageOverrides,
  setPageOverrides,
  resetPageOverrides,
  PageContent,
  ContentSection,
  ContentCard,
} from "@/lib/contentStore";
import {
  FileEdit,
  ChevronRight,
  RotateCcw,
  Save,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Type,
  AlignLeft,
  ArrowLeft,
  Check,
  Layers,
} from "lucide-react";

function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

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

function PageList({ onSelect }: { onSelect: (m: PageMeta) => void }) {
  const groups = PAGE_REGISTRY.reduce<Record<string, PageMeta[]>>((acc, p) => {
    if (!acc[p.group]) acc[p.group] = [];
    acc[p.group].push(p);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">Content Manager</h1>
        <p className="mt-1 text-sm text-gray-500">Edit text, images, and cards for any page on the site</p>
      </div>

      <div className="space-y-6">
        {Object.entries(groups).map(([groupName, pages]) => (
          <div key={groupName} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3 sm:px-6">
              <Layers className="h-4 w-4 text-gray-400" />
              <span className="text-xs font-black uppercase tracking-wider text-gray-500">{groupName}</span>
            </div>
            <div className="divide-y divide-gray-50">
              {pages.map((page) => {
                const hasOverride = Object.keys(getPageOverrides(page.id)).length > 0;
                return (
                  <button
                    key={page.id}
                    onClick={() => onSelect(page)}
                    className="group flex w-full flex-col gap-3 px-4 py-4 text-left transition-colors hover:bg-gray-50/60 sm:flex-row sm:items-center sm:gap-4 sm:px-6"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                      <div className={`h-2 w-2 shrink-0 rounded-full ${hasOverride ? "bg-[#f97316]" : "bg-gray-200"}`} />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-gray-900 transition-colors group-hover:text-primary">{page.label}</p>
                        <p className="mt-0.5 text-xs capitalize text-gray-400">
                          {page.type} page{hasOverride ? " · custom content saved" : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-black ${
                          page.type === "hub" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {page.type}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-primary" />
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

function SectionItem({
  section,
  index,
  total,
  onChange,
  onDelete,
  onMove,
}: {
  section: ContentSection;
  index: number;
  total: number;
  onChange: (s: ContentSection) => void;
  onDelete: () => void;
  onMove: (dir: -1 | 1) => void;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      <div className="flex items-center gap-3 bg-gray-50 px-4 py-3">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-black text-primary">
            {index + 1}
          </span>
          <span className="flex-1 truncate text-sm font-bold text-gray-800">{section.title || "Untitled Section"}</span>
          {open ? <ChevronUp className="h-4 w-4 shrink-0 text-gray-400" /> : <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />}
        </button>

        <div className="flex items-center gap-1 shrink-0">
          {index > 0 && (
            <button
              type="button"
              onClick={() => onMove(-1)}
              className="rounded p-1 text-gray-400 transition-colors hover:bg-white hover:text-gray-700"
              aria-label="Move section up"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
          )}
          {index < total - 1 && (
            <button
              type="button"
              onClick={() => onMove(1)}
              className="rounded p-1 text-gray-400 transition-colors hover:bg-white hover:text-gray-700"
              aria-label="Move section down"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onDelete}
            className="rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label="Delete section"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-4 bg-white p-4">
          <div>
            <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-gray-400">Section Title</label>
            <input
              value={section.title}
              onChange={(e) => onChange({ ...section, title: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-semibold transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Section title…"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-gray-400">Body Text</label>
            <textarea
              rows={5}
              value={section.body}
              onChange={(e) => onChange({ ...section, body: e.target.value })}
              className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium leading-relaxed transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Write the section text here…"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-gray-400">Image URL</label>
            <input
              value={section.imageUrl}
              onChange={(e) => onChange({ ...section, imageUrl: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="https://…"
            />
            {section.imageUrl && <img src={section.imageUrl} alt="" className="mt-2 h-32 w-full rounded-xl bg-gray-100 object-cover" />}
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-black uppercase tracking-wider text-gray-400">Image Alt Text</label>
            <input
              value={section.imageAlt || ""}
              onChange={(e) => onChange({ ...section, imageAlt: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Describe the image…"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function CardItem({
  card,
  index,
  total,
  onChange,
  onDelete,
  onMove,
}: {
  card: ContentCard;
  index: number;
  total: number;
  onChange: (c: ContentCard) => void;
  onDelete: () => void;
  onMove: (d: -1 | 1) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-3 bg-gray-50 px-4 py-3">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          {card.icon ? (
            <span className="shrink-0 text-xl">{card.icon}</span>
          ) : (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-black text-gray-500">
              {index + 1}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-gray-800">{card.name || "Untitled Card"}</p>
            {card.subtitle && <p className="truncate text-xs text-gray-400">{card.subtitle}</p>}
          </div>
          {open ? <ChevronUp className="h-4 w-4 shrink-0 text-gray-400" /> : <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />}
        </button>

        <div className="flex items-center gap-1 shrink-0">
          {index > 0 && (
            <button
              type="button"
              onClick={() => onMove(-1)}
              className="rounded p-1 text-gray-400 transition-colors hover:bg-white hover:text-gray-700"
              aria-label="Move card up"
            >
              <ChevronUp className="h-3.5 w-3.5" />
            </button>
          )}
          {index < total - 1 && (
            <button
              type="button"
              onClick={() => onMove(1)}
              className="rounded p-1 text-gray-400 transition-colors hover:bg-white hover:text-gray-700"
              aria-label="Move card down"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={onDelete}
            className="rounded p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label="Delete card"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-3 bg-white p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-black uppercase tracking-wider text-gray-400">Name</label>
              <input
                value={card.name}
                onChange={(e) => onChange({ ...card, name: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Card name…"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-black uppercase tracking-wider text-gray-400">Subtitle</label>
              <input
                value={card.subtitle || ""}
                onChange={(e) => onChange({ ...card, subtitle: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Subtitle…"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-black uppercase tracking-wider text-gray-400">Description</label>
            <textarea
              rows={3}
              value={card.description}
              onChange={(e) => onChange({ ...card, description: e.target.value })}
              className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium leading-relaxed transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="Card description…"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-black uppercase tracking-wider text-gray-400">Image URL</label>
              <input
                value={card.image}
                onChange={(e) => onChange({ ...card, image: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="https://…"
              />
              {card.image && <img src={card.image} alt="" className="mt-2 h-20 w-full rounded-lg bg-gray-100 object-cover" />}
            </div>
            <div>
              <label className="mb-1 block text-xs font-black uppercase tracking-wider text-gray-400">Tag</label>
              <input
                value={card.tag || ""}
                onChange={(e) => onChange({ ...card, tag: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="e.g. Cultural Icon…"
              />
              <label className="mb-1 mt-2 block text-xs font-black uppercase tracking-wider text-gray-400">Emoji Icon</label>
              <input
                value={card.icon || ""}
                onChange={(e) => onChange({ ...card, icon: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="🍚"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-black uppercase tracking-wider text-gray-400">Link (href)</label>
            <input
              value={card.href}
              onChange={(e) => onChange({ ...card, href: e.target.value })}
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="/path or https://…"
            />
          </div>
        </div>
      )}
    </div>
  );
}

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

  function updateSection(idx: number, s: ContentSection) {
    const sections = [...(content.sections || [])];
    sections[idx] = s;
    setContent((c) => ({ ...c, sections }));
    setSaved(false);
  }

  function deleteSection(idx: number) {
    const sections = (content.sections || []).filter((_, i) => i !== idx);
    setContent((c) => ({ ...c, sections }));
    setSaved(false);
  }

  function moveSection(idx: number, dir: -1 | 1) {
    const sections = [...(content.sections || [])];
    const target = idx + dir;
    if (target < 0 || target >= sections.length) return;
    [sections[idx], sections[target]] = [sections[target], sections[idx]];
    setContent((c) => ({ ...c, sections }));
    setSaved(false);
  }

  function addSection() {
    const sections = [...(content.sections || []), { id: uid(), title: "", body: "", imageUrl: "", imageAlt: "" }];
    setContent((c) => ({ ...c, sections }));
    setSaved(false);
  }

  function updateCard(groupIdx: number, cardIdx: number, card: ContentCard) {
    const groups = (content.groups || []).map((g, gi) =>
      gi !== groupIdx
        ? g
        : {
            ...g,
            items: g.items.map((it, ci) => (ci !== cardIdx ? it : card)),
          },
    );
    setContent((c) => ({ ...c, groups }));
    setSaved(false);
  }

  function deleteCard(groupIdx: number, cardIdx: number) {
    const groups = (content.groups || []).map((g, gi) =>
      gi !== groupIdx
        ? g
        : {
            ...g,
            items: g.items.filter((_, ci) => ci !== cardIdx),
          },
    );
    setContent((c) => ({ ...c, groups }));
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
    setContent((c) => ({ ...c, groups }));
    setSaved(false);
  }

  function addCard(groupIdx: number) {
    const groups = (content.groups || []).map((g, gi) =>
      gi !== groupIdx
        ? g
        : {
            ...g,
            items: [...g.items, { id: uid(), name: "", subtitle: "", description: "", image: "", tag: "", icon: "", href: "" }],
          },
    );
    setContent((c) => ({ ...c, groups }));
    setSaved(false);
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:mb-8">
        <div className="flex items-start gap-3">
          <button onClick={onBack} className="rounded-xl p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-gray-400">{meta.group}</p>
            <h1 className="text-xl font-black text-gray-900">{meta.label}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 px-3 py-2 text-xs font-bold text-gray-500 transition-colors hover:bg-gray-50"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className={`flex items-center justify-center gap-1.5 rounded-xl px-5 py-2 text-xs font-black shadow-lg transition-all disabled:opacity-50 ${
              saved ? "bg-emerald-500 text-white shadow-emerald-500/25" : "bg-primary text-white shadow-primary/25 hover:bg-blue-700"
            }`}
          >
            {saved ? (
              <>
                <Check className="h-3.5 w-3.5" /> Saved!
              </>
            ) : saving ? (
              "Saving…"
            ) : (
              <>
                <Save className="h-3.5 w-3.5" /> Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {meta.type === "article" && (
            <div>
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-black text-gray-900">Content Sections</h2>
                <button onClick={addSection} className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                  <Plus className="h-3.5 w-3.5" /> Add Section
                </button>
              </div>
              <div className="space-y-3">
                {(content.sections || []).map((s, i) => (
                  <SectionItem
                    key={s.id}
                    section={s}
                    index={i}
                    total={(content.sections || []).length}
                    onChange={(section) => updateSection(i, section)}
                    onDelete={() => deleteSection(i)}
                    onMove={(dir) => moveSection(i, dir)}
                  />
                ))}
                {(content.sections || []).length === 0 && (
                  <div className="rounded-2xl border-2 border-dashed border-gray-200 py-10 text-center">
                    <AlignLeft className="mx-auto mb-2 h-8 w-8 text-gray-300" />
                    <p className="text-sm font-semibold text-gray-400">No sections yet</p>
                    <button onClick={addSection} className="mt-2 text-sm font-bold text-primary hover:underline">
                      Add your first section →
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {meta.type === "hub" && (
            <div className="space-y-6">
              {(content.groups || []).map((group, gi) => (
                <div key={group.id} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <div className="flex flex-col gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                    <h3 className="text-sm font-black text-gray-800">{group.label}</h3>
                    <button onClick={() => addCard(gi)} className="flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                      <Plus className="h-3.5 w-3.5" /> Add Card
                    </button>
                  </div>
                  <div className="space-y-3 p-4">
                    {group.items.map((card, ci) => (
                      <CardItem
                        key={card.id}
                        card={card}
                        index={ci}
                        total={group.items.length}
                        onChange={(c) => updateCard(gi, ci, c)}
                        onDelete={() => deleteCard(gi, ci)}
                        onMove={(dir) => moveCard(gi, ci, dir)}
                      />
                    ))}
                    {group.items.length === 0 && (
                      <div className="rounded-xl border-2 border-dashed border-gray-100 py-6 text-center">
                        <p className="text-xs font-semibold text-gray-400">No cards in this group</p>
                        <button onClick={() => addCard(gi)} className="mt-1 text-xs font-bold text-primary hover:underline">
                          Add card →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <label className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500">
              <ImageIcon className="h-3.5 w-3.5" /> Hero Image URL
            </label>
            <input
              value={content.heroImageUrl || ""}
              onChange={(e) => {
                setContent((c) => ({ ...c, heroImageUrl: e.target.value }));
                setSaved(false);
              }}
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              placeholder="https://…"
            />
            {content.heroImageUrl && <img src={content.heroImageUrl} alt="" className="mt-3 h-28 w-full rounded-xl bg-gray-100 object-cover" />}
          </div>

          {meta.type === "article" && (
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <label className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-500">
                <Type className="h-3.5 w-3.5" /> Pull Quote
              </label>
              <textarea
                rows={4}
                value={content.pullQuote || ""}
                onChange={(e) => {
                  setContent((c) => ({ ...c, pullQuote: e.target.value }));
                  setSaved(false);
                }}
                className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium leading-relaxed transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="A memorable quote from this page…"
              />
            </div>
          )}

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <p className="mb-2 text-xs font-black uppercase tracking-wider text-blue-600">How it works</p>
            <ul className="space-y-1.5 text-xs font-medium text-blue-700">
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

export default function AdminContent() {
  const [selected, setSelected] = useState<PageMeta | null>(null);

  if (selected) {
    return <PageEditor key={selected.id} meta={selected} onBack={() => setSelected(null)} />;
  }

  return <PageList onSelect={setSelected} />;
}