function NoCommentsPlaceHolder() {
  return (
    <div
      style={{
        padding: 16,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        No comments yet
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "#8e8e8e",
          marginTop: 0,
        }}
      >
        Start the conversation.
      </p>
    </div>
  );
}

export default NoCommentsPlaceHolder;
