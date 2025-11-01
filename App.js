import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.profileContainer}>
          <Image
            source={require("./src/images/cvPhoto.jpg")}
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              resizeMode: "cover",
              borderWidth: 2,
              borderColor: '#888',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.4,
              shadowRadius: 6,
              elevation: 8,
              marginTop: 20,
              marginBottom: 80
            }}
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>Shefkie Segashi</Text>
            <Text style={styles.subtitle}>3rd year student</Text>

            <View style={styles.detailsContainer}>
              <Text style={styles.details}>Date of Birth: 17/07/2005</Text>
              <Text style={styles.details}>Nationality: Kosovar</Text>
              <Text style={styles.details}>Gender: Female</Text>
            </View>  

            <View style={styles.contactContainer}>
              <Text style={styles.contactTitle}>Contact</Text>
              <Text style={styles.contactText}>Naman Gerguri , 6</Text>
              <Text style={styles.contactText}>42000 Vushtrri, Kosovo (Home)</Text>
              <Text style={styles.contactText}>📧 shefkiesegashi@gmail.com</Text>
              <Text style={styles.contactText}>📧 shefkie.segashi@umib.net</Text>
              <Text style={styles.contactText}>📞 (+383) 45293165</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.skillsContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.aboutMeContainer}>
          <Text style={styles.aboutMeTitle}>About Me</Text>
          <Text style={styles.aboutMeText}>
           Shefkie Segashi is a third-year student currently pursuing her Bachelor's degree at the University of Mitrovica "Isa Boletini" in the Computer Science and Engineering program. She is passionate about technology and enjoys learning new skills in areas such as Cloud Computing, Web Development, and Machine Learning. She is curious, motivated, and dedicated to developing her problem-solving and technical abilities through academic projects and personal initiatives.
          </Text>
        </View>

        <View style={styles.educationContainer}>
          <Text style={styles.educationTitle}>Education & Certification</Text>
          
          <View style={styles.educationItem}>
            <Text style={styles.educationDegree}>Bachelor in Computer Science and Engineering</Text>
            <Text style={styles.educationInstitution}>University of Mitrovica "Isa Boletini"</Text>
            <Text style={styles.educationPeriod}>2023 - Present</Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.educationDegree}>High School Diploma</Text>
            <Text style={styles.educationInstitution}>Gymnasium of Natural Sciences "Eqrem Qabej"</Text>
            <Text style={styles.educationPeriod}>2020 - 2023</Text>
          </View>

          <View style={styles.educationItem}>
            <Text style={styles.educationDegree}>ICT for Kosovo's Growth</Text>
            <Text style={styles.educationInstitution}>Web Application Development Professional</Text>
            <Text style={styles.educationPeriod}>2025</Text>
          </View>
        </View>

        <View style={styles.skillsInterestsContainer}>
          <Text style={styles.skillsInterestsTitle}>Skills & Interests</Text>
          
          <View style={styles.skillsCategory}>
            <Text style={styles.categoryTitle}>Technical Skills</Text>
            <View style={styles.skillsList}>
              <Text style={styles.skillItem}>• Full-Stack Developer</Text>
              <Text style={styles.skillItem}>• Database</Text>
              <Text style={styles.skillItem}>• Web Development</Text>
              <Text style={styles.skillItem}>• Cybersecurity</Text>
            </View>
          </View>

          <View style={styles.skillsCategory}>
            <Text style={styles.categoryTitle}>Interests</Text>
            <View style={styles.skillsList}>
              <Text style={styles.skillItem}>• Artificial Intelligence</Text>
              <Text style={styles.skillItem}>• Data Science</Text>
              <Text style={styles.skillItem}>• Cloud Computing</Text>
              <Text style={styles.skillItem}>• Machine Learning</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
    backgroundColor: '#fdf5f5ff',
  },
  sidebar: {
    width: "17%",                    
    backgroundColor: "#34495E",     
    paddingVertical: 40,
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white", 
  },
  subtitle: {
    fontSize: 20,
    color: '#d0d8e8',
    marginTop: 5,
  },
  detailsContainer: {
    marginTop: 10,
  },
  details: {
    fontSize: 16,
    color: '#dddddd',
    marginVertical: 2,
  },
  contactContainer: {
    marginTop: 15,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  contactText: {
    fontSize: 16,
    color: '#dfe6e9',
    marginVertical: 2,
  },
  skillsContainer: {
    width: "60%",
    padding: 30,
  },
  scrollContent: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  aboutMeContainer: {
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 25,
    borderLeftWidth: 5,
    borderLeftColor: '#4e73df',
  },
  aboutMeTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#2c3e50',
    letterSpacing: 0.5,
  },
  aboutMeText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#495057',
  },
  educationContainer: {
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 25,
    borderLeftWidth: 5,
    borderLeftColor: '#4e73df',
  },
  educationTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#2c3e50',
    letterSpacing: 0.5,
  },
  educationItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  educationDegree: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  educationInstitution: {
    fontSize: 16,
    color: '#3498db',
    marginBottom: 3,
    fontWeight: '500',
  },
  educationPeriod: {
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  skillsInterestsContainer: {
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 25,
    borderLeftWidth: 5,
    borderLeftColor: '#4e73df',
  },
  skillsInterestsTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#2c3e50',
    letterSpacing: 0.5,
  },
  skillsCategory: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 5,
  },
  skillsList: {
    marginLeft: 10,
  },
  skillItem: {
    fontSize: 16,
    color: '#495057',
    marginVertical: 4,
    lineHeight: 22,
  },
});