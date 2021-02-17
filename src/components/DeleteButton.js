const DeleteButton = ({id, deleteMethod}) => {
  return (
    <div className="item-buttons delete-button">
      {/* <button onClick={() => editMethod(item.id)}>Edit</button> */}
      <button onClick={() => deleteMethod(id)}>X</button>
    </div>
  );
}

export default DeleteButton;