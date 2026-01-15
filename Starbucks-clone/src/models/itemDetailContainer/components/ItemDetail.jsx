export const ItemDetail = ({ data }) => {
  return (
  <>
    <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto bg-[#1e3932] rounded-lg shadow-sm">
      <div className=" flex justify-center items-center bg-[#1e3932] rounded-lg p-8">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-64 h-64 rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold text-white mb-4">
            {data.title}
        </span>
      </div>
    </div>
  </>

  );
};