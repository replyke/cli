import { ReactNode, useMemo } from "react";
import {
  CommentsSortByOptions,
  CommentSectionProvider,
  Entity,
} from "@replyke/react-js";
import { CommentsFeed, NewCommentForm } from "../components";
import { CommentMenuModal } from "../components/modals/CommentMenuModal";
import { CommentMenuModalOwner } from "../components/modals/CommentMenuModalOwner";
import { ModalManagerProvider } from "../context/ModalManagerContext";
import { ThreadedStyleCallbacks } from "../components/ThreadedCommentSection";

function useThreadedComments({
  entity,
  entityId,
  foreignId,
  shortId,
  createIfNotFound,
  callbacks,
  defaultSortBy,
  limit,
  highlightedCommentId,
}: {
  entity?: Entity | undefined | null;
  entityId?: string | undefined | null;
  foreignId?: string | undefined | null;
  shortId?: string | undefined | null;
  createIfNotFound?: boolean;
  callbacks?: ThreadedStyleCallbacks;
  defaultSortBy?: CommentsSortByOptions;
  limit?: number;
  highlightedCommentId?: string | null;
}) {
  const MemoizedCommentSectionProvider = useMemo(() => {
    return ({ children }: { children: ReactNode }) => (
      <CommentSectionProvider
        entity={entity}
        entityId={entityId}
        foreignId={foreignId}
        shortId={shortId}
        createIfNotFound={createIfNotFound}
        callbacks={callbacks}
        defaultSortBy={defaultSortBy}
        limit={limit}
        highlightedCommentId={highlightedCommentId}
      >
        <ModalManagerProvider>
          <>
            {children}
            <CommentMenuModal />
            <CommentMenuModalOwner />
          </>
        </ModalManagerProvider>
      </CommentSectionProvider>
    );
  }, [
    entity,
    entityId,
    foreignId,
    shortId,
    createIfNotFound,
    callbacks,
    defaultSortBy,
    limit,
    highlightedCommentId
  ]);

  return useMemo(() => ({
    CommentSectionProvider: MemoizedCommentSectionProvider,
    CommentsFeed,
    NewCommentForm,
  }), [MemoizedCommentSectionProvider]);
}

export default useThreadedComments;
