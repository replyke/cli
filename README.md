# Replyke CLI & Component Registry

Shadcn-style component distribution for Replyke comment systems.

## 📦 What's Included

- **CLI Tool** (`@replyke/cli`) - Install components into your project
- **Component Registry** - Threaded comments system (React web)
- **24 Component Files** - Fully transformed, no -core dependencies
- **Inline Styles** - Copy, paste, customize

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd packages/cli
pnpm install
```

### 2. Build CLI

```bash
pnpm build
```

### 3. Test in Your Project

In a separate React project:

```bash
# Initialize Replyke
node /path/to/cli/packages/cli/dist/index.js init

# Add threaded comments
node /path/to/cli/packages/cli/dist/index.js add comments-threaded
```

---

## 📁 Project Structure

```
cli/
├── packages/
│   └── cli/                    # CLI package
│       ├── src/
│       │   ├── commands/       # init, add commands
│       │   └── utils/          # registry, transform utilities
│       └── package.json
│
├── registry/
│   └── react/
│       └── comments-threaded/
│           └── styled/
│               ├── registry.json     # Component metadata
│               ├── files/            # 20 component files
│               ├── hooks/            # 2 hook files
│               ├── utils/            # 1 utility file
│               └── context/          # 1 context file
│
├── package.json                # Root workspace
└── pnpm-workspace.yaml        # Workspace config
```

---

## 🛠️ Development Commands

```bash
# Build CLI
pnpm build

# Watch mode (for development)
pnpm dev

# Run CLI directly
pnpm cli init
pnpm cli add comments-threaded
```

---

## ✅ What's Complete

### Phase 1: Component Transformation ✅
- [x] All 24 TypeScript files transformed
- [x] No @replyke/comments-threaded-core dependencies
- [x] Hardcoded base styles with customization comments
- [x] Kebab-case file naming
- [x] Relative imports updated
- [x] Logical directory grouping maintained

### Phase 2: CLI Implementation ✅
- [x] `init` command - Project initialization
- [x] `add` command - Component installation
- [x] Registry fetching (local for testing)
- [x] Dependency checking
- [x] File copying with structure preservation

### Phase 3: Registry Structure ✅
- [x] registry.json metadata
- [x] 24 files organized with logical grouping
- [x] Component descriptions
- [x] Dependency specifications

### Phase 4: Workspace Setup ✅
- [x] Root package.json
- [x] pnpm-workspace.yaml
- [x] CLI package.json with dependencies

---

## 🧪 Testing Instructions

### Prerequisites

Create a test React project (in a separate directory):

```bash
npm create vite@latest test-replyke-app -- --template react-ts
cd test-replyke-app
npm install
```

### Install Required Dependencies

```bash
npm install @replyke/react-js @replyke/ui-core-react-js
```

### Run CLI

```bash
# Initialize (creates replyke.json)
node /path/to/cli/packages/cli/dist/index.js init

# Add components
node /path/to/cli/packages/cli/dist/index.js add comments-threaded
```

### Use Components

```tsx
// src/App.tsx
import ThreadedCommentSection from './components/ui/threaded-comment-section';

function App() {
  return (
    <div>
      <ThreadedCommentSection
        entityId="test-entity"
      />
    </div>
  );
}
```

### Verify

- ✅ Files copied to `src/components/ui/`
- ✅ No TypeScript errors
- ✅ Imports resolve correctly
- ✅ Components render
- ✅ Can modify hardcoded styles directly

---

## 📝 Known Limitations (MVP)

- Only React web components (no React Native yet)
- Only threaded comments (social comments not transformed)
- Only inline styles (no Tailwind variant)
- Local registry only (not published to npm/GitHub yet)
- No `diff` command

---

## 🔮 Future Enhancements

- [ ] Transform social comments system
- [ ] Add React Native support
- [ ] Publish to npm
- [ ] GitHub registry hosting
- [ ] Tailwind CSS variants
- [ ] `diff` command for updates
- [ ] Component preview website

---

## 📖 Component Files

### Main Components (20 files)
- `threaded-comment-section.tsx` - Main entry point
- `new-comment-form.tsx` - Top-level comment form
- `mention-suggestions.tsx` - @ mention autocomplete
- `comments-feed/` - Feed components (4 files)
- `comment-thread/` - Thread components (4 files)
- `single-comment/` - Individual comment (5 files)
- `modals/` - Modal components (4 files)

### Supporting Files (4 files)
- `hooks/use-threaded-comments.tsx` - Main hook
- `hooks/use-modal-manager.tsx` - Modal state
- `utils/prop-comparison.ts` - Memoization utilities
- `context/modal-manager-context.tsx` - Modal context

---

## 🐛 Troubleshooting

### "Cannot find module '@replyke/react-js'"

Make sure you've installed the peer dependencies:
```bash
npm install @replyke/react-js @replyke/ui-core-react-js
```

### "No replyke.json found"

Run the init command first:
```bash
node /path/to/cli/packages/cli/dist/index.js init
```

### TypeScript errors in registry files

These are expected! Registry files aren't meant to run directly. They'll work once copied to a project with dependencies installed.

---

## 📄 License

Apache-2.0

---

## 🎉 Success!

You've successfully created a shadcn-style component distribution system for Replyke!

Next step: Test in a real React project and iterate based on feedback.
