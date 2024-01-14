const Member = (props) => {
  const { member } = props;
  const { name, id } = member;

  return (
    <div>
      {id}-{name}
    </div>
  );
};

export default Member;
