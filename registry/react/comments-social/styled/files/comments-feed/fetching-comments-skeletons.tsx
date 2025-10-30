import { resetDiv, CommentSkeleton } from "@replyke/ui-core-react-js";
import useUIState from "../../hooks/use-ui-state";

function FetchingCommentsSkeletons() {
  const { theme } = useUIState();

  return (
    <div
      style={{
        ...resetDiv,
        display: "flex",
        flexDirection: "column",
        // 🎨 CUSTOMIZATION: Feed background and gap (Default: white, 8px gap)
        gap: 8,
        backgroundColor: theme === 'dark' ? '#1F2937' : '#fff',
        paddingBottom: 24,
        paddingRight: 16,
        paddingLeft: 16,
      }}
    >
      {[1, 2, 3].map((i) => (
        <CommentSkeleton key={i} />
      ))}
    </div>
  );
}

export default FetchingCommentsSkeletons;
