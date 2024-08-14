import AppDialog from ".";

export const SuccessModal = ({ isOpen, onClose, message }) => {
  return (
    <AppDialog isOpen={isOpen} onClose={onClose}>
      <section className="pt-8 pb-3  px-10">
        <h3 className="text-xl text-center font-semibold">Successful!</h3>
        <p className="text-lg font-medium text-center">{message}</p>
        <button
          onClick={onClose}
          className="w-full mt-6 py-2 px-2 rounded-lg text-white bg-[#E58F24]"
        >
          Okay
        </button>
      </section>
    </AppDialog>
  );
};
