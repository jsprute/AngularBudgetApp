echo "clean up images"

# in the springboot folder
# docker build -t jsprute/gs-spring-boot-docker .
# docker run -p 8080:8080 jsprute/gs-spring-boot-docker

var=$(docker ps -a | grep "my-webpages")
if [ -n "$var" ]; then
    echo "removing my-webpages"
    docker stop my-webpages
    docker rm my-webpages
    echo "finished removing my-webpages"
fi

var=$(docker ps -a | grep "my-backend")
if [ -n "$var" ]; then
    echo "removing my-backend"
    docker stop my-backend
    docker rm my-backend
    echo "finished removing my-backend"
fi

cd website
echo "deploying website..."
npm install
npm audit fix
npm run build
docker build -t jsprute/budgetappws .
docker run -dit --name my-webpages -p 8082:80 jsprute/budgetappws
echo "finished website"
cd ..

cd backend2
echo "deploying backend"
npm install
tsc
docker build -t jsprute/budgetbackend .
docker run -dit --name my-backend -p 3000:3000 jsprute/budgetbackend
echo "finished backend"
cd ..

echo "end"