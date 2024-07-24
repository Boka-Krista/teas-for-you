plugins {
    kotlin("js") version "1.5.21"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(kotlin("stdlib-js"))
}

kotlin {
    js {
        browser {
            webpackTask {
                outputFileName = "bundle.js"
            }
        }
        binaries.executable()
    }
}
