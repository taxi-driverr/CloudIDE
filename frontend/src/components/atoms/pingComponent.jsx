
import usePing from '../../hooks/apis/queries/usePing.js';

function PingComponent(){
    const { isLoading, data} = usePing();
  if(isLoading){
    return (
      <>
      Loading...
      </>
    )
  }
  return (
    <>
    Hello {data.message}
    </>
  )
}
export default PingComponent;