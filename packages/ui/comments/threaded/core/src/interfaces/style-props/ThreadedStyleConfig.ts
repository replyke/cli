import { CommentStyleProps } from "./CommentStyleProps";
import { CommentFeedStyleProps } from "./CommentFeedStyleProps";
import { NewCommentFormStyleProps } from "./NewCommentFormStyleProps";

export type ThreadedStyleConfig = {
  type: "threaded";
  commentFeedProps: CommentFeedStyleProps;
  commentProps: CommentStyleProps;
  newCommentFormProps: NewCommentFormStyleProps;
};

export type PartialThreadedStyleConfig = {
  type: "threaded";
  commentFeedProps: Partial<CommentFeedStyleProps>;
  commentProps: Partial<CommentStyleProps>;
  newCommentFormProps: Partial<NewCommentFormStyleProps>;
};
