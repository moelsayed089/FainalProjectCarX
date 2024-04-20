
import { ColorRing } from 'react-loader-spinner';

 const Loading = ({className}) => {
  return (
      <div className=" d-flex justify-content-center">
          <ColorRing
              visible={true}
              height="22.5"
              width="60"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={['#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee', '#eeeeee']}
          />
      </div>
  )
}
export default Loading;
